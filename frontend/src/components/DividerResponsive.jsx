import { Divider } from "primereact/divider";

function DividerResponsive() {
  return (
    <>
      <div className="desktopDivider">
        <Divider layout="vertical" />
      </div>
      <div className="mobileDivider">
        <Divider />
      </div>
    </>
  );
}

export default DividerResponsive;
