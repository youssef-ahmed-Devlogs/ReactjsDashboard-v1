import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMonyContainer">
          <span className="featuredMony">$2,415</span>
          <span className="featuredMonyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMonyContainer">
          <span className="featuredMony">$4,415</span>
          <span className="featuredMonyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMonyContainer">
          <span className="featuredMony">$2,225</span>
          <span className="featuredMonyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>
    </div>
  );
}
