import GithubImg from "../../../assets/github.png";
import { FaCodeBranch } from "react-icons/fa";

interface GitRepoProps {
  branchName: string;
}
export function GitRepoComponent({ branchName }: GitRepoProps) {
  return (
    <div className="flex gap-10 border border-asPurple px-5 py-3 rounded-lg items-center bg-asLightPurple">
      <div className="flex items-center gap-5">
        <div className="border border-asPurple rounded-full p-3 bg-asLightPurple">
          <img src={GithubImg} />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-asLightGray font-Inter text-xs"> Git repository</p>
          <p className="font-Inter text-base"> {branchName || "Repo name"}</p>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-asLightGray font-Inter text-xs"> Deploying</p>
        <p className="font-Inter text-base flex gap-1 items-center">
          <FaCodeBranch /> Other
        </p>
      </div>
    </div>
  );
}
