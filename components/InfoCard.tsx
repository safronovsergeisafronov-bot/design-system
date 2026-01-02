import React from 'react';

export interface InfoCardProps {
  /**
   * Icon element to display in the top-left corner
   * Should be an SVG icon with outline style, 22px size
   */
  icon: React.ReactNode;
  /**
   * Title text - short, clear, without marketing words
   */
  title: string;
  /**
   * Description text - explains the logic, answers "what happens next"
   */
  description: string;
  /**
   * Additional CSS class name
   */
  className?: string;
}

/**
 * Info Card / Access Component
 * 
 * Soft informational card with rounded corners and neutral background.
 * Used to explain what happens next.
 * Includes a subtle icon, a clear title, and supporting text.
 * Calm, trustworthy, and unobtrusive.
 * 
 * @example
 * ```tsx
 * <InfoCard
 *   icon={<UsersIcon />}
 *   title="Доступ в личный кабинет"
 *   description="Сразу после оплаты на ваш e-mail приходят логин и пароль для входа в личный кабинет."
 * />
 * ```
 */
export function InfoCard({
  icon,
  title,
  description,
  className = '',
}: InfoCardProps) {
  return (
    <div
      className={`${className}`}
      style={{
        backgroundColor: '#FBF8F1',
        borderRadius: '24px',
        padding: '32px',
        border: 'none',
      }}
    >
      {/* Icon Container */}
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          backgroundColor: '#F3EEDC',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '12px',
          color: '#2B2B2B',
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '22px',
          fontWeight: 600,
          lineHeight: '1.3',
          color: '#1E1E1E',
          margin: 0,
          marginBottom: '12px',
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: '1.6',
          color: '#5F5F5F',
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
}

