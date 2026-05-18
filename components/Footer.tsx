function Footer() {
  return (
    <footer className="pb-8">
      <div className="flex items-center justify-between mt-14">
        <div className="text-muted">
          ©{new Date().getFullYear()} London, (ﾉ◕ヮ◕)ﾉ *:･ﾟ
        </div>
        <span className="text-muted bg-gray-100 rounded-full px-2 py-1 text-xs">
          v1.0
        </span>
      </div>
    </footer>
  );
}

export default Footer;
