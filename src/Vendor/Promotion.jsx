import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {Mongo_API_URL} from '../api';

export default function Promotion() {
    const [alertData,setalertData]=useState('');
    const [formData, setFormData] = useState({
        Title: '',
        Description: '',
        Email: localStorage.getItem('Email'),
        Dis_Type: '',
        Discount: '',
        ImageUrl: '',
        Min_Order: '',
        StartDate: '',
        EndDate: '',
    });
    const postOffer = async () => {
        await fetch(`${Mongo_API_URL}/offer`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(formData)
        }).then(response => response.json())
            .then(data => {
                setalertData(data.message);
                setFormData({
                    Title: '',
                    Description: '',
                    Email: localStorage.getItem('Email'),
                    Dis_Type: '',
                    Discount: '',
                    ImageUrl: '',
                    Min_Order: '',
                    StartDate: '',
                    EndDate: '',
                })
            }).catch(error => {
                setalertData("An error occurred at server side.");
                console.log(error);
            });
    }
    return (
        <>
            {
                alertData && (
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <b>{alertData}</b>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>{
                                setalertData();
                        }}></button>
                    </div>
                )
            }
            <div style={{ maxWidth: '550px' }}>
                <h4>Create Promotion</h4>
                <hr />
                <input type='text' placeholder="Promotion Title" className="form-control   mb-4" value={formData.Title} onChange={(e) => {
                    setFormData({ ...formData, Title: e.target.value });
                }} />
                <textarea placeholder="Promotion Description" className="form-control   mb-4" value={formData.Description} onChange={(e) => {
                    setFormData({ ...formData, Description: e.target.value });
                }} />
                <select className="form-select   mb-4" onChange={(e) => {
                    setFormData({ ...formData, Dis_Type: e.target.value });
                }}>
                    <option value="">Discount Type</option>
                    <option value="percentage">Percentage Discount</option>
                    <option value="flat">Flat Amount Discount</option>
                </select>
                <input type="number" placeholder="Discount Value" className="form-control   mb-4" value={formData.Discount} onChange={(e) => {
                    setFormData({ ...formData, Discount: e.target.value });
                }} />
                <input type="number" placeholder="Minimum Order Value" className="form-control   mb-2" value={formData.Min_Order} onChange={(e) => {
                    setFormData({ ...formData, Min_Order: e.target.value });
                }} />
                <label htmlFor='startDate'>Start Date:</label>
                <input type="date" id="startDate" className='form-control   mb-2' value={formData.StartDate} onChange={(e) => {
                    setFormData({ ...formData, StartDate: e.target.value });
                }} />
                <label htmlFor='endDate'>End Date:</label>
                <input type='date' id="endDate" className='form-control   mb-2'
                    value={formData.EndDate} onChange={(e) => {
                        setFormData({ ...formData, EndDate: e.target.value });
                    }}
                />
                <input type='button' className='form-control btn-outline-success' value="Submit" onClick={()=>{
                    postOffer();
                }} />
            </div>


        </>
    )
}
