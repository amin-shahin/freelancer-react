
import useToggleProjectStatus from "./useToggleProjectStatus";
import Loader from "../../ui/Loader";
import SwitchToggle from "../../ui/SwitchToggle";

function ToggleProjectStatus({ project }) {
  const enabled=  project.status === "OPEN" ? true : false
  
  const { isToggleLoading, toggleProjectStatus } = useToggleProjectStatus();

  {
    project.status === "OPEN" ? (
      <span className="badge badge--success">باز</span>
    ) : (
      <span className="badge badge--danger">بسته</span>
    );
  }
  const handleToggle = () => {
    const status = project.status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProjectStatus(
      { id: project._id, data: { status } },

    );
  };

  return (
    <div>
      {isToggleLoading ? (
        <Loader height={20} width={50} />
      ) : (
        <SwitchToggle label={project.status === "OPEN" ? "باز" : "بسته"} enabled={enabled} onChange={handleToggle}/>
      )}
    </div>
  );
}

export default ToggleProjectStatus;
