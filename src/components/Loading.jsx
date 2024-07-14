import SyncLoader from "react-spinners/SyncLoader";
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
export default function Loading({ loading }) {
  return (
    <SyncLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={20}
    />
  );
}
