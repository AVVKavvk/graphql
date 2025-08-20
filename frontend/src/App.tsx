import { useQuery, gql, useLazyQuery } from "@apollo/client";
import User from "./components/addUser";

function App() {
  const queryStr = gql`
    #graphql
    query ExampleQuery {
      users {
        name
        email
        _id
      }
    }
  `;
  // const { loading, error, data } = useQuery(queryStr);
  const [getUsers, { called, loading, data }] = useLazyQuery(queryStr);

  if (called && loading) return <p>Loading ...</p>;

  return (
    <>
      <div>
        users:
        {data &&
          data.users.map((user: any) => {
            return (
              <div className="">
                <p>{user._id}</p>
                <p>{user.name}</p>
                <p>{user.email}</p>
              </div>
            );
          })}
        {!called && <button onClick={() => getUsers()}>Get Users</button>}
      </div>

      <User />
    </>
  );
}

export default App;
