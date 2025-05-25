function Header({ children }: { children: React.ReactNode }) { // Headerコンポーネントのタグ内に書かれた物がchildrenに入る
  return (
    <div>
      <header>
          <h1>MOVIEFLIX</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Header;