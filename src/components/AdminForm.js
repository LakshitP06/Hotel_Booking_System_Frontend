import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminForm(props) {
  const [amenities, setAmenities] = useState(['']);
  const [propertyPolicies, setPropertyPolicies] = useState(['']);
  const [hotelPictures, setHotelPictures] = useState(['']);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hotelName, setHotelName] = useState('');
  const [rating, setRating] = useState('');
  const [reviews, setReviews] = useState('');
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const handleAddAmenity = () => {
    setAmenities([...amenities, '']);
  };

  const handleAddPropertyPolicy = () => {
    setPropertyPolicies([...propertyPolicies, '']);
  };

  const handleAddHotelPicture = () => {
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setHotelPictures([...hotelPictures, reader.result]);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleAmenityChange = (index, value) => {
    const newAmenities = [...amenities];
    newAmenities[index] = value;
    setAmenities(newAmenities);
  };

  const handlePropertyPolicyChange = (index, value) => {
    const newPropertyPolicies = [...propertyPolicies];
    newPropertyPolicies[index] = value;
    setPropertyPolicies(newPropertyPolicies);
  };

  const handleDeleteAmenity = (index) => {
    const newAmenities = [...amenities];
    newAmenities.splice(index, 1);
    setAmenities(newAmenities);
  };

  const handleDeletePropertyPolicy = (index) => {
    const newPropertyPolicies = [...propertyPolicies];
    newPropertyPolicies.splice(index, 1);
    setPropertyPolicies(newPropertyPolicies);
  };

  const handleDeleteHotelPicture = (index) => {
    const newHotelPictures = [...hotelPictures];
    newHotelPictures.splice(index, 1);
    setHotelPictures(newHotelPictures);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const [rooms, setRooms] = useState([
    {
      Name: '',
      Guests: '',
      Beds: '',
      Size: '',
      View: '',
      Price: '',
      ExtraDetails: '',
      RoomPictures: [''],
    },
  ]);

  const handleAddRoom = () => {
    setRooms([...rooms, {
      Name: '',
      Guests: '',
      Beds: '',
      Size: '',
      View: '',
      Price: '',
      ExtraDetails: '',
      RoomPictures: [''],
    }]);
  };

  const handleRoomChange = (index, field, value) => {
    const newRooms = [...rooms];
    newRooms[index][field] = value;
    setRooms(newRooms);
  };

  const handleAddRoomPicture = (index) => {
    const newRooms = [...rooms];
    newRooms[index].RoomPictures.push('');
    setRooms(newRooms);
  };

  const handleRoomPictureChange = (roomIndex, pictureIndex, value) => {
    const newRooms = [...rooms];
    newRooms[roomIndex].RoomPictures[pictureIndex] = value;
    setRooms(newRooms);
  };

  const handleDeleteRoomPicture = (roomIndex, pictureIndex) => {
    const newRooms = [...rooms];
    newRooms[roomIndex].RoomPictures.splice(pictureIndex, 1);
    setRooms(newRooms);
  };

  const handleDeleteRoom = (index) => {
    const newRooms = [...rooms];
    newRooms.splice(index, 1);
    setRooms(newRooms);
  };

  const arr = [amenities, propertyPolicies, hotelPictures, rooms, hotelName, rating, reviews, location, city, email, contact];

  const handleClick = () => {
    props.getState(arr);
  };

  return (
    <div className="container">
      <h3 className="mt-3">Register Your Hotel</h3>
        {/* Hotel Name */}
        <div className="mb-3">
          <label htmlFor="hotelName" className="form-label">Hotel Name</label>
          <input
            type="text"
            className="form-control"
            id="hotelName"
            name="Name"
            required
            value={hotelName}
            onChange={(e) => setHotelName(e.target.value)}
          />
        </div>

        {/* Amenities */}
        <div className="mb-3">
          <label className="form-label">Amenities</label>
          {amenities.map((amenity, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Enter amenity"
                value={amenity}
                onChange={(e) => handleAmenityChange(index, e.target.value)}
              />
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDeleteAmenity(index)}
              >
                Delete
              </button>
            </div>
          ))}
          <button type="button" className="btn btn-primary" onClick={handleAddAmenity}>
            + Add Amenity
          </button>
        </div>

        {/* Property Policies */}
        <div className="mb-3">
          <label className="form-label">Property Policies</label>
          {propertyPolicies.map((policy, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Enter property policy"
                value={policy}
                onChange={(e) => handlePropertyPolicyChange(index, e.target.value)}
              />
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDeletePropertyPolicy(index)}
              >
                Delete
              </button>
            </div>
          ))}
          <button type="button" className="btn btn-primary" onClick={handleAddPropertyPolicy}>
            + Add Property Policy
          </button>
        </div>

        {/* Hotel Pictures */}
        <div className="mb-3">
          <label className="form-label">Hotel Pictures (Base64)</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="form-control mb-2"
          />
          {hotelPictures.map((picture, index) => (
            <div key={index} className="mb-2">
              <img src={picture} alt={`Hotel Picture ${index + 1}`} style={{ maxWidth: '100px' }} />
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDeleteHotelPicture(index)}
              >
                Delete
              </button>
            </div>
          ))}
          <button type="button" className="btn btn-primary" onClick={handleAddHotelPicture}>
            + Add Hotel Picture
          </button>
        </div>

        {/* Rooms */}
        <div className="mb-3">
          <h4>Hotel Rooms</h4>
          {rooms.map((room, roomIndex) => (
            <div key={roomIndex} className="mb-3">
              <label>Room {roomIndex + 1}</label>
              <div className="mb-2">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={room.Name}
                  onChange={(e) => handleRoomChange(roomIndex, 'Name', e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label>No. of Guests</label>
                <input
                  type="text"
                  className="form-control"
                  value={room.Guests}
                  onChange={(e) => handleRoomChange(roomIndex, 'Guests', e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label>Beds</label>
                <input
                  type="text"
                  className="form-control"
                  value={room.Beds}
                  onChange={(e) => handleRoomChange(roomIndex, 'Beds', e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label>Size</label>
                <input
                  type="text"
                  className="form-control"
                  value={room.Size}
                  onChange={(e) => handleRoomChange(roomIndex, 'Size', e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label>View</label>
                <input
                  type="text"
                  className="form-control"
                  value={room.View}
                  onChange={(e) => handleRoomChange(roomIndex, 'View', e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label>Price</label>
                <input
                  type="text"
                  className="form-control"
                  value={room.Price}
                  onChange={(e) => handleRoomChange(roomIndex, 'Price', e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label>Extra Details</label>
                <input
                  type="text"
                  className="form-control"
                  value={room.ExtraDetails}
                  onChange={(e) => handleRoomChange(roomIndex, 'ExtraDetails', e.target.value)}
                />
              </div>

              {/* Room Pictures */}
              <div className="mb-3">
                <label className="form-label">Room Pictures (Base64)</label>
                {room.RoomPictures.map((picture, pictureIndex) => (
                  <div key={pictureIndex} className="mb-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleRoomPictureChange(roomIndex, pictureIndex, e.target.value)}
                      className="form-control mb-2"
                    />
                    <img src={picture} alt={`Room Picture ${pictureIndex + 1}`} style={{ maxWidth: '100px' }} />
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDeleteRoomPicture(roomIndex, pictureIndex)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
                <button type="button" className="btn btn-primary" onClick={() => handleAddRoomPicture(roomIndex)}>
                  + Add Room Picture
                </button>
              </div>

              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDeleteRoom(roomIndex)}
              >
                Delete Room
              </button>
            </div>
          ))}
          <button type="button" className="btn btn-primary" onClick={handleAddRoom}>
            + Add Room
          </button>
        </div>

        {/* Rating */}
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Rating</label>
          <input
            type="number"
            className="form-control"
            id="rating"
            name="Rating"
            required
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>

        {/* Reviews */}
        <div className="mb-3">
          <label htmlFor="reviews" className="form-label">Reviews</label>
          <textarea
            className="form-control"
            id="reviews"
            name="Reviews"
            rows="3"
            value={reviews}
            onChange={(e) => setReviews(e.target.value)}
          ></textarea>
        </div>

        {/* Location */}
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="Location"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* City */}
        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="City"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Contact */}
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">Contact</label>
          <input
            type="tel"
            className="form-control"
            id="contact"
            name="Contact"
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-success" onClick={handleClick}>
          Register Hotel
        </button>
    </div>
  );
}

export default AdminForm;
