import { FaTrash } from "react-icons/fa";
import { useLoadUser } from "../../Hooks/useLoadUser";
import { useAxiosSequre } from "../../Hooks/useAxiosSequre";

export const AllUser = () => {
  const { user, loading, refetch } = useLoadUser();
  const axiosSequre = useAxiosSequre();
  const handleDelete = (id) => {
    axiosSequre.delete(`/user/${id}`).then((res) => {
      refetch();
      console.log(res);
    });
  };
  return (
    <div>
      <h1 className="font-bold text-2xl text-center">Manage User</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((el, idx) => {
              return (
                <tr key={el._id}>
                  <th>{idx + 1}</th>
                  <td>{el.displayName}</td>
                  <td>{el.email}</td>
                  <td>Blue</td>
                  <td>
                    <button onClick={() => handleDelete(el._id)}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
