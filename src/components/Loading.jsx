import SyncLoader from "react-spinners/SyncLoader";
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
export default function Loading({ loading }) {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <SyncLoader
        color="#4338ca"
        loading={loading}
        cssOverride={override}
        size={20}
      />
    </div>

  );
}
