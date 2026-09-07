"use client";
import { useEffect, useState } from "react";
import { userContextType } from "@/types/types";
import { useUserContext } from "@/context/userContext";

const ProfileSettingsPage = () => {
  
  const { user } = useUserContext() as userContextType;
  const [categories, setCategories] = useState<string[]>([]);

  const fetchAvailableCategories = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}list.php?c=list`,
      );
      const data = await response.json();
      if (data) {
        setCategories(
          data.meals?.map((meal: { strCategory: string }) => meal.strCategory),
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) return;
    fetchAvailableCategories();
  }, [user]);

  return (
    <main className="grow flex flex-col items-center justify-center">
      {user && (
        <div className="profile-settings w-[90%] grid m-auto font-manrope text-heading gap-x-2 gap-y-2">
          <div className="profile-settings-header flex justify-center items-center bg-primary text-font-secondary">
            <h2 className="font-bold text-3xl text-center">Profile Settings</h2>
          </div>
          <div className="profile-settings-image h-[full] w-[full] p-4 bg-primary text-font-secondary">
            <svg
              className="block h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 480 480"
            >
              <path
                d="M480 240a160 160 0 0 0-240-138.6V0a160 160 0 0 0-138.6 240H0a160 160 0 0 0 240 138.6V480a160 160 0 0 0 138.6-240H480Z"
                fill="#f73333"
              ></path>
            </svg>
          </div>
          <div className="profile-settings-name flex justify-start items-center text-xl bg-primary text-font-secondary">
            <h3 className="p-8 pr-2 font-bold tracking-widest">Name:</h3>
            <p>{user.name}</p>
          </div>
          <div className="childprofile-settings-username p-8 flex justify-start items-center text-xl bg-primary text-font-secondary">
            <h3 className="pr-2 font-bold tracking-widest">Username:</h3>
            <p>{user.username}</p>
          </div>
          <div className="profile-settings-categories p-8 bg-[#E9B50D]">
            <h3 className="font-bold tracking-widest text-xl pb-2">
              Favourite Categories:
            </h3>
            <ul className="flex flex-wrap">
              {categories &&
                categories.map((item, index) => (
                  <li key={index} className="p-2">
                    <input
                      type="checkbox"
                      checked={user?.categories?.includes(item) ? true : false}
                      id={`check-${item}`}
                      name={item}
                      value={item}
                      className="accent-secondary"
                    ></input>
                    <label
                      className="pl-1 font-semibold"
                      htmlFor={`check-${item}`}
                    >
                      {item}
                    </label>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
      <div className="flex w-[90%] justify-end">
        <button className="bg-primary text-font-secondary font-bold p-2 rounded-2xl px-8 place-self-center tracking-widest cursor-pointer mb-2">
          Save
        </button>
      </div>
    </main>
  );
};

export default ProfileSettingsPage;
