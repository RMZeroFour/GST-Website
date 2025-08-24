function MapCard() {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden">
      <iframe
        src="https://maps.google.com/maps?q=gold sterling technologies&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        title="Google Map"
        className="w-full h-full"
      />
    </div>
  );
}

export default MapCard;
