import { Triangle } from "react-loader-spinner"

const LoadingSpinner  = () => {
  return (
    <div className="scale-50 sm:scale-100">
      <Triangle
        visible={true}
        color="#ffffff"
        ariaLabel="triangle-loading"
        wrapperStyle={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "30vh",
        }}
      />
    </div>
  )
}
export default LoadingSpinner 