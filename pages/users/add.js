import Head from "next/head";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
export default function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitUser = async (event) => {
    alert(name);
    event.preventDefault();
    setIsLoading(true);
    const data = {
      name: name,
      email: email,
      gender: gender,
      status: status,
    };
    console.log(data);
    const JSONdata = JSON.stringify(data);

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + "48f0213961ef4084e90f6cd03881e8b89903a733772d4fa9c471ec316bd8b126",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };
    const response = await fetch(`https://gorest.co.in/public/v2/users`, options);
    await setUser(JSONdata);
    await setIsLoading(false);
    alert(response.body.code);
    console.log(data);
    event.target.reset();
  };

  return (
    <div>
      <Head>
        <title> Add User </title>
      </Head>

      <main>
        <h3>Add User</h3>
        {user && <div className={styles.mt2}>{user}</div>}
        {isLoading && <div className={styles.mt2}>Loading...</div>}

        <div className={styles.form}>
          <form onSubmit={submitUser}>
            <div>
              <label> Name </label>
              <input type="text" onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <label> Email </label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label> Gender </label>
              <div onChange={(e) => setGender(e.target.value)}>
                <input type="radio" value="male" name="gender" /> Male
                <input type="radio" value="female" name="gender" /> Female
              </div>
            </div>
            <div>
              <label> Status </label>
              <div onChange={(e) => setStatus(e.target.value)}>
                <input type="radio" value="active" name="status" /> Active
                <input type="radio" value="inactive" name="status" /> Inactive
              </div>
            </div>
            <div>
              <button> SUBMIT </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
