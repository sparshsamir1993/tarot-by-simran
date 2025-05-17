export default function Footer() {
  const year = new Date().getFullYear()
  return <footer style={{ textAlign: 'center', padding: '1rem' }}>© {year} Readings by [Name]</footer>
}
