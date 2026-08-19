import { useInView } from '../hooks/useInView';

export default function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
  ...props
}) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'revealed' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}
