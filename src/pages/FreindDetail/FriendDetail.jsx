import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

import callicon from '../../../assets/images/call.png'
import texticon from '../../../assets/images/text.png'
import videoicon from '../../../assets/images/video.png'
import snoozicon from '../../../assets/images/Vector (1).png'
import archivicon from '../../../assets/images/Vector (3).png'
import dlticon from '../../../assets/images/Vector (2).png'

const FriendDetail = () => {
    const { id } = useParams()

    const [selected, setSelected] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/data.json');
            const data = await res.json();

            const selectedData = data.find(
                (friendData) => String(friendData.id) === id
            )

            setSelected(selectedData)
        };
        fetchData();
    }, [id]);

    const handleInteraction = (type) => {
        const newRecord = {
            id: selected.id,
            name: selected.name,
            type: type,
            date: new Date().toLocaleString()
        };

        const existing = JSON.parse(localStorage.getItem("timeline")) || [];
        existing.push(newRecord);
        localStorage.setItem("timeline", JSON.stringify(existing));

        //  TOAST
        toast.success(`${type} added to timeline`);
    };

    const handleActionToast = (action) => {
        toast.info(`${action} clicked`);
    };

    return (
        <div className="bg-gray-100 border p-4 md:p-8">

            {/* MAIN GRID */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 px-20 py-10">

                {/* LEFT CARD */}
                <div className="shadow bg-white rounded-xl p-6 text-center flex flex-col items-center">

                    <img src={selected?.picture} className="w-20 h-20 rounded-full mb-3 object-cover" />

                    <h2 className="text-lg font-semibold">{selected?.name}</h2>

                    <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full mt-2">
                        {selected?.status}
                    </span>

                    <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full mt-2">
                        {selected?.tags}
                    </span>

                    <p className="text-sm text-gray-500 mt-3 italic text-center">
                        {selected?.bio}
                    </p>

                    <p className="text-xs text-gray-400 mt-1">
                        {selected?.email}
                    </p>

                    {/* ACTION BUTTONS */}
                    <div className="w-full mt-6 flex flex-col gap-3">

                        <button
                            onClick={() => handleActionToast("Snooze")}
                            className="bg-gray-50 hover:bg-gray-100 flex items-center justify-center gap-2 rounded-lg py-3 text-sm"
                        >
                            <img src={snoozicon} className="w-4 h-4" />
                            <span>Snooze 2 Weeks</span>
                        </button>

                        <button
                            onClick={() => handleActionToast("Archive")}
                            className="bg-gray-50 hover:bg-gray-100 flex items-center justify-center gap-2 rounded-lg py-3 text-sm"
                        >
                            <img src={archivicon} className="w-4 h-4" />
                            <span>Archive</span>
                        </button>

                        <button
                            onClick={() => handleActionToast("Delete")}
                            className="bg-gray-50 hover:bg-red-50 flex items-center justify-center gap-2 rounded-lg py-3 text-sm text-red-500"
                        >
                            <img src={dlticon} className="w-4 h-4" />
                            <span>Delete</span>
                        </button>

                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="md:col-span-2 space-y-6">

                    {/* TOP STATS */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">

                        <div className="bg-white rounded-xl shadow p-5">
                            <h2 className="text-2xl font-bold">{selected?.daysSince}</h2>
                            <p className="text-gray-500 text-sm mt-1">Days Since Contact</p>
                        </div>

                        <div className="bg-white rounded-xl shadow p-5">
                            <h2 className="text-2xl font-bold">{selected?.goal}</h2>
                            <p className="text-gray-500 text-sm mt-1">Goal (Days)</p>
                        </div>

                        <div className="bg-white rounded-xl shadow p-5">
                            <h2 className="text-lg font-semibold">{selected?.next_due_date}</h2>
                            <p className="text-gray-500 text-sm mt-1">Next Due</p>
                        </div>

                    </div>

                    {/* RELATIONSHIP GOAL */}
                    <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
                        <div>
                            <h3 className="font-semibold text-green-900">Relationship Goal</h3>
                            <p className="text-gray-500 text-sm">
                                Connect every <span className="font-bold">{selected?.goal} days</span>
                            </p>
                        </div>

                        <button
                            onClick={() => handleActionToast("Edit")}
                            className="bg-gray-50 hover:bg-gray-100 px-3 py-1 rounded text-sm"
                        >
                            Edit
                        </button>
                    </div>

                    {/* QUICK CHECK-IN */}
                    <div className="bg-white rounded-xl shadow p-5">
                        <h3 className="font-semibold mb-4">Quick Check-In</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                            <button onClick={() => handleInteraction("Call")}
                                className="bg-gray-50 hover:bg-gray-100 rounded-lg py-6 flex flex-col items-center gap-2"
                            >
                                <img src={callicon} className="w-5 h-5" />
                                <span>Call</span>
                            </button>

                            <button onClick={() => handleInteraction("Text")}
                                className="bg-gray-50 hover:bg-gray-100 rounded-lg py-6 flex flex-col items-center gap-2"
                            >
                                <img src={texticon} className="w-5 h-5" />
                                <span>Text</span>
                            </button>

                            <button onClick={() => handleInteraction("Video")}
                                className="bg-gray-50 hover:bg-gray-100 rounded-lg py-6 flex flex-col items-center gap-2"
                            >
                                <img src={videoicon} className="w-5 h-5" />
                                <span>Video</span>
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendDetail;