import { useNavigate } from "react-router";

function useBack() {
  const navigate = useNavigate();
  return () => navigate(-1);
}

export default useBack;
