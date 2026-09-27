interface BrandProps {
  compact?: boolean
}

export function Brand({ compact = false }: BrandProps) {
  return (
    <a className={`brand ${compact ? 'brand--compact' : ''}`} href="#home" aria-label="Dev Stack home">
      <span className="brand-mark">DS</span>
      <span className="brand-name"><span className='text-change'>Dev</span> Stack</span>
    </a>
  )
}
