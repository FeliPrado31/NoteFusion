import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface PricingSectionProps {}

const pricingPlans = [
  {
    id: 'gratuito',
    name: 'Gratuito',
    benefits: ['Beneficios del plan gratuito'],
  },
  {
    id: 'pro',
    name: 'Pro',
    benefits: ['Beneficios del plan Pro'],
  },
  // Add more plans as needed
];

const PricingSection: React.FC<PricingSectionProps> = () => {
  return (
    <div className='mx-auto max-w-2xl'>
      <h2>Elige tu plan</h2>
      <table>
        <thead>
          <tr>
            <th>Plan</th>
            <th>Beneficios</th>
            <th>Registrarse</th>
          </tr>
        </thead>
        <tbody>
          {pricingPlans.map((plan) => (
            <tr key={plan.id}>
              <td>{plan.name}</td>
              <td>
                <ul>
                  {plan.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </td>
              <td>
                <Link href={`/registro/${plan.id}`}>
                  <Button>Registrarse</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingSection;
