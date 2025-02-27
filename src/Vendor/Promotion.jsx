import React from 'react'
import { Link } from 'react-router-dom'

export default function Promotion() {
    return (
        <>
            <div style={{ maxWidth: '550px' }}>
                <h4>Create Promotion</h4>
                <hr/>
                <input type='text' placeholder="Promotion Title" className="form-control   mb-4" />
                <textarea placeholder="Promotion Description" className="form-control   mb-4" />
                <select className="form-select   mb-4">
                    <option value="">Discount Type</option>
                    <option value="percentage">Percentage Discount</option>
                    <option value="flat">Flat Amount Discount</option>
                </select>
                <input type="number" placeholder="Discount Value" className="form-control   mb-4" />
                <input type="number" placeholder="Minimum Order Value" className="form-control   mb-2" />
                <label htmlFor='startDate'>Start Date:</label>
                <input type="date" id="startDate" className='form-control   mb-2'/>
                <label htmlFor='endDate'>End Date:</label>
                <input type='date' id="endDate" className='form-control   mb-2'/>
                <input type='submit' className='form-control btn-outline-success'/>


            </div>



            {/*
            <CardHeader>
                <CardTitle>Create New Promotion</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                                        <div className="flex space-x-4">
                        <div>
                            <p className="text-sm mb-1">Start Date</p>
                            <Calendar className="w-full" />
                        </div>
                        <div>
                            <p className="text-sm mb-1">End Date</p>
                            <Calendar className="w-full" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <p>Activate Promotion</p>
                        <Switch checked={isActive} onCheckedChange={setIsActive} />
                    </div>
                    <Button className="w-full mt-4">Create Promotion</Button>
                </div>
            </CardContent> */}

        </>
    )
}
