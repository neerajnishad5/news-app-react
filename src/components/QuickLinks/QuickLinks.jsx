import "./QuickLinks.css";

export default function QuickLinks() {
  return (
    <div className="quick-links">
      <h2 className="text-center quick-links-heading"> Quick Links</h2>
      <div className="d-flex justify-content-around align-items-around items">
        <div className="item1">India</div>
        <div className="item2">Trending</div>
        <div className="item3">Latest</div>
        <div className="item4">Crime</div>
        <div className="item5">USA</div>
      </div>
    </div>
  );
}
