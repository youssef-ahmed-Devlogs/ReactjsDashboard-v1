import "./featuredInfo.css";
import { ArrowDownward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMonyContainer">
          <span className="featuredMony">$2,415</span>
          <span className="featuredMonyRate">
            -11,4 <ArrowDownward />
          </span>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>
    </div>
  );
}
