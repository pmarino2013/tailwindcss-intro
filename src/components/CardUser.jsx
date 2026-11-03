import React from "react";

const CardUser = ({ user }) => {
  const { name, avatar_url, message } = user;
  return (
    // <div className="bg-slate-50 dark:bg-gray-800 py-4 px-8 gap-2 border-0 w-full rounded-2xl flex items-center shadow-2xl flex-col md:flex-row md:w-lg">
    //   <img
    //     className="md:mx-0 mx-auto rounded-full"
    //     src="https://devsapihub.com/img-users/2.jpg"
    //     alt="Urian Viera"
    //   />
    //   <div className="space-y-2 md:ms-8 ms-0">
    //     <div className="space-y-0.5 md:text-center">
    //       <p className="text-2xl font-semibold dark:text-white">Urian Viera</p>
    //       <p className="font-medium text-gray-500 dark:text-gray-300">
    //         Product Engineer
    //       </p>
    //     </div>
    //     <div className="grid md:block">
    //       <button className=" border-2 rounded-3xl px-4 py-1 border-purple-200 text-purple-600 dark:text-purple-200 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 active:text-white">
    //         Message
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-slate-50 dark:bg-gray-800 py-4 px-8 gap-2 border-0 w-full rounded-2xl flex items-center shadow-2xl flex-col md:flex-row ">
      <img
        className="md:mx-0 mx-auto rounded-full"
        src={avatar_url}
        alt={name}
      />
      <div className="space-y-2 md:ms-8 ms-0">
        <div className="space-y-0.5 text-center md:text-left">
          <p className="text-2xl font-semibold dark:text-white">{name}</p>
          <p className="font-medium text-gray-500 dark:text-gray-300">
            {message}
          </p>
        </div>
        <div className="grid ">
          <button className=" border-2 rounded-3xl px-4 py-1 border-purple-200 text-purple-600 dark:text-purple-200 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 active:text-white">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardUser;
