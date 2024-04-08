import React, { useEffect, useState } from 'react';
import AppoinmentCard from './AppoinmentCard';
import { getAllAppointments } from '../../utils/booking';
import Layout from './Layout';

const AllAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allAppointments = await getAllAppointments();
        setAppointments(allAppointments);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className='text-primary text-left fw-bold my-5'>All Appointments</h1>
      <div className="row">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="col-md-4 mb-4">
            <AppoinmentCard appointment={appointment} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAppointments;
