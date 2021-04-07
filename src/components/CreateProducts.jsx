import FormProducts from "../pages/FormProducts";



export default function CreateProducts( { token }) {
  return (
    <div className="container my-3">
      <h1>Alta de Productos</h1>
      <FormProducts token={ token } />
    </div>
  );
}
