import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

function User() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const addUserString = gql`
    #graphql
    mutation Mutation(
      $name: String!
      $email: String!
      $password: String!
      $role: String!
    ) {
      addUser(name: $name, email: $email, password: $password, role: $role)
    }
  `;

  const [addUserMutation, { data }] = useMutation(addUserString);

  async function addUser() {
    try {
      if (
        !userData.name ||
        !userData.email ||
        !userData.password ||
        !userData.role
      ) {
        return;
      }
      await addUserMutation({
        variables: {
          name: userData.name,
          email: userData.email,
          password: userData.password,
          role: userData.role,
        },
      });
      if (data) {
        alert(data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <form action={addUser}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="role"
          onChange={(e) => setUserData({ ...userData, role: e.target.value })}
        />
        <button type="submit" onClick={addUser}>
          Add user
        </button>
      </form>
    </div>
  );
}

export default User;
