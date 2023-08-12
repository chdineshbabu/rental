import React from 'react'
function DashForm() {
    return (
        <div className='dash-form '>
            <h1 className='text-white text-3xl font-semibold'>Sell Now</h1>
            <div className='form-db'>
                <form>
                    <div class="group">
                        <label className='text-white py-2' for="name">Property</label>
                        <input type="text" id="name" className='bg-transparent text-white' placeholder="" /><hr style={{ width: "300px" }} />
                    </div>
                    <div class="group">
                        <label className='text-white py-2' for="name">Description</label>
                        <input type="textarea" id="name" className='bg-transparent text-white' placeholder="" /><hr style={{ width: "300px" }} />
                    </div>
                    <div class="group">
                        <label className='text-white py-2' for="name">Price</label>
                        <input type="text" id="name" className='bg-transparent text-white' placeholder="" /><hr style={{ width: "300px" }} />
                    </div>
                    <div class="group">
                        <label className='text-white py-2' for="name">Location</label>
                        <input type="text" id="name" className='bg-transparent text-white' placeholder="" /><hr style={{ width: "300px" }} />
                    </div>
                    <label class="block my-10 ">
                        <span class="sr-only">Choose profile photo</span>
                        <input type="file" class="block w-full text-sm text-slate-500
                                                 file:mr-4 file:py-2 file:px-4
                                                file:rounded-full file:border-0
                                                file:text-sm file:font-semibold
                                              file:bg-violet-50 file:text-violet-700
                                            hover:file:bg-violet-100"/>
                    </label>
                    <button className='form-btn'>Add</button>
                </form>
            </div>
        </div>
    )
}

export default DashForm