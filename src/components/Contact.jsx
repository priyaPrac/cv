import React from "react";

function Contact () {
    return (
        <div className="flex flex-col w-full pb-5 pt-5" id="contact">
            
            <div className="mx-auto inline-block w-10 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> </svg>
            </div>

            <p className="mb-8 leading-relaxed text-white-100 text-center"> Email : 7401priya@gmail.com </p>
        </div>
    );
}

export default Contact;