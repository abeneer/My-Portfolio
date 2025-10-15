export default function Aurora() {
    return (
      <div className="aurora-layer" aria-hidden>
        <div className="aurora aurora--brand" style={{ ["--t" as any]: "38s" }} />
        <div className="aurora aurora--brand faint" style={{ ["--t2" as any]: "52s" }} />
      </div>
    );
  }
  