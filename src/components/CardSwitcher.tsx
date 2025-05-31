import { useNavigation } from "../context/NavigationContext";
import { BasicInfoCard } from "./BasicInfoCard/BasicInfoCard";
import { ProjectsCard } from "./ProjectsCard/ProjectsCard";
import { TechnologiesCard } from "./TechnologiesCard/TechnologiesCard";

export const CardSwitcher = () => {
  const { currentCard } = useNavigation();

  return (
    <div className="card-container">
      {currentCard === "basic-info" && <BasicInfoCard />}
      {currentCard === "technologies" && <TechnologiesCard />}
      {currentCard === "projects" && <ProjectsCard />}
    </div>
  );
};
