import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../configuration/firebase";

function DashCards(props) {
    const { post } = props;
    const [user] = useAuthState(auth);
  return (
    <div>
        <div class="max-w-md md:max-w-xl px-2 pt-3 dash-cd">
            <div class="bg-transprent shadow-xl rounded-lg overflow-hidden md:flex">
                <div class="bg-cover bg-bottom h-56 md:h-auto md:w-56" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80)'}}>
                </div>
                <div>
                    <div class="p-4 md:p-2">
                        <p class="font-bold text-white text-xl md:text-xl">{post.property}</p>
                        <p class="text-white md:text-xs">{post.description}</p>
                    </div>
                    <div class="p-2 md:p-2 bg-transperent">
                        <div class="sm:flex sm:justify-between sm:items-center">
                            <div>
                       
                                <div class="flex items-center">
                                    
                                </div>
                            </div>
                            <button class="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-indigo-700 hover:bg-indigo-600 font-bold text-white md:text-sm rounded-lg shadow-md">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashCards