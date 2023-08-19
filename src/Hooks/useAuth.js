import { useDispatch } from "react-redux";
import { setMessage } from "../Redux/Authslice";
import { useCallback } from "react";

function useAuth() {
  //   const navigate = useNavigatorContext();
  //   const location = useLocation();
  const dispatch = useDispatch();

  //   const handleClick = () => {
  //     console.log("Button Clicked");
  //     dispatch(setMessage("Button Clicked"));
  //   };
  const handleClick = useCallback(() => {
    console.log("Button Clicked");
    dispatch(setMessage("Button Clicked"));
  }, [dispatch]);

  return {
    handleClick,
  };
}

export default useAuth;
