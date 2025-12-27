export default function Footer() {
  return (
    <div className="bg-white text-gray-500 flex flex-col">
      <span className="divider"></span>
      <div className="flex flex-col w-full items-center mb-5">
        <div className="flex flex-row mt-5 mb-5 font-bold">
          <span className="material-symbols-outlined text-2xl text-gray-400 mr-3">
            pets
          </span>
          <h2>Dog Pictionary</h2>
        </div>
        <div className="flex flex-row gap-6 mb-5 text-[#8a7c60] font-medium">
          <h3>Privacy Policy</h3>
          <h3>Terms of Service</h3>
          <h3>Contact Us</h3>
          <h3>Community Guidelines</h3>
        </div>
        <p className="text-[#8a7c60]">
          © 2025 Dog Pictionary. By Cory Campbell
        </p>
      </div>
    </div>
  );
}
