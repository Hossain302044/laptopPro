import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-100">
                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                            <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Difference between javascript and nodejs?</h2>
                                <p className="leading-relaxed">JavaScript হল একটি সাধারণ প্রোগ্রামিং ভাষা যা যেকোনো ব্রাউজারে JavaScript ইঞ্জিন চালায়। জাভাস্ক্রিপ্ট সাধারণত একটি ওয়েব অ্যাপ্লিকেশনের জন্য ক্লায়েন্ট-সাইড কার্যকলাপের জন্য ব্যবহৃত হয়। জাভাস্ক্রিপ্ট সাধারণত জাভা প্রোগ্রামিং language। </p>
                                <p className="leading-relaxed">Node Js হল JavaScript library । node js প্রোগ্রামিং ল্যাংগুয়েজ নয় । server & slient side একটি দোভাষী ।</p>
                            </div>
                        </div>
                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                            <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">When should you use nodejs and when should you use mongodb?</h2>
                                <p className="leading-relaxed">ডাটা সমুহ স্টোরেজ করার জন্য mongodb ডাটাবেস use করি । কোনো ডাটা সমুহ কে সংরক্ষণের প্রয়োজনে হলে আমরা ডাটাবেস use করি । ডাটা সমূহ client সাইড থেকে সার্ভার সাইড পাঠানোর জন্য আমরা Node js ব্যবহার করি  ।data সুমুহ সাভারে পাঠানো & সার্ভার থেকে ক্লায়েন্ট সাইড Show করানো সব কিছুর জন্য দোভাষী হিসাবে node js ব্যবহার হয়</p>
                            </div>
                        </div>
                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                            <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Differences between sql and nosql databases?</h2>
                                <p className="leading-relaxed">RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) . এই ডাটাবেসগুলি জটিল system জন্য সবচেয়ে উপযুক্ত । ACID property অনুসরণ করে । datababe table আকারে তৈরী করে</p>
                                <p className="leading-relaxed">RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) . এই ডাটাবেসগুলি গুলো খুব সহজ হই থাকে । datababe table আকারে তৈরী করে । কোনো প্রকার সিকুয়েন্স থাকে না । datababe table আকারে থাকে না</p>
                            </div>
                        </div>
                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                            <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">What is JWT and how is it used?</h2>
                                <p className="leading-relaxed">JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. JWT একটি টোকেন প্রদান করে । একটা নির্দিষ্ট টাইম পর্যন্ত user validations চেক করে । user টোকেন  নষ্ট হলে নতুন একটা টোকেন create করে and validations করে</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;