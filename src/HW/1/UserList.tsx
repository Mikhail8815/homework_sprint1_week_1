type AddressType = {
  street: string
  city: string
};

type UserType = {
    id: number,
    name: string,
    age: number,
    address: AddressType
};

type UserListPropsType = {
  users: Array<UserType>
};

export const UserList = (props: UserListPropsType) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>
      <ul>
        {props.users.map(({id, name, age, address: {street, city}}) => (
          <li key={id} id={`hw01-user-${id}`}>
            <strong>{name}</strong> (Age: {age})<strong> Address:</strong>
            {street}, {city}
          </li>
        ))}
      </ul>
    </div>
  );
};
