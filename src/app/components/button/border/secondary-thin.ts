export default (
  backgroundColor: string,
  color?: string,
) => `<svg width="16" height="40" viewBox="0 0 16 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 3L13 2.5H15.5V37.5H13L3.5 28L2.5 27V13L3 12.5L12.5 3Z" fill="${backgroundColor}"/>
<path d="M16 2.5H15.5M16 37.5H15.5M15.5 37.5H13L3.5 28L2.5 27V13L3 12.5L12.5 3L13 2.5H15.5M15.5 37.5V2.5" stroke="${backgroundColor}"/>
<path d="M16 1H13H12.5L12 1.5L11.5 2L1.5 12L1 12.5V13.5V24V27V27.5L1.5 28L3 29.5L4.5 31L5.5 32L9 35.5L12 38.5L12.5 39H13H16" stroke="${color}" stroke-width="2"/>
</svg>
`;
