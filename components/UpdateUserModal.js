import { useState } from "react";

export default function UpdateUserModal(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(props.data);
  const [isLoading, setIsLoading] = useState(false);
  const submitUser = async (event) => {
    console.log(user);
    event.preventDefault();
    // setIsLoading(true);

    // console.log(data);
    const JSONdata = JSON.stringify(user);

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + "48f0213961ef4084e90f6cd03881e8b89903a733772d4fa9c471ec316bd8b126",
      },
      body: JSONdata,
    };
    const id = user.id;
    try {
      const response = await fetch(`https://gorest.co.in/public/v2/users/${id}`, options);
      if (response.ok) {
        alert("Update user success");
      } else {
        alert("Failed to update user");
      }
    } catch (error) {
      alert("Failed to update user");
    }

    // await setIsLoading(false);
    event.target.reset();
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Update</button>

      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={submitUser}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    {/* <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div> */}

                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Update User</h3>
                      <div className="mt-2">
                        <div>
                          <div>
                            <label> Name </label>
                            <input name="name" type="text" defaultValue={user.name} onChange={(event) => setUser((user) => ({ ...user, [event.target.name]: event.target.value }))} required />
                          </div>
                          <div>
                            <label> Email </label>
                            <input name="email" type="email" defaultValue={user.email} onChange={(event) => setUser((user) => ({ ...user, [event.target.name]: event.target.value }))} required />
                          </div>
                          <div>
                            <label> Gender </label>
                            <div onChange={(event) => setUser((user) => ({ ...user, [event.target.name]: event.target.value }))}>
                              <input type="radio" value="male" checked={user.gender === "male"} name="gender" /> Male
                              <input type="radio" value="female" checked={user.gender === "female"} name="gender" /> Female
                            </div>
                          </div>
                          <div>
                            <label> Status </label>
                            <div onChange={(event) => setUser((user) => ({ ...user, [event.target.name]: event.target.value }))}>
                              <input type="radio" value="active" checked={user.status === "active"} name="status" /> Active
                              <input type="radio" value="inactive" checked={user.status === "inactive"} name="status" /> Inactive
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    OK
                  </button>

                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
