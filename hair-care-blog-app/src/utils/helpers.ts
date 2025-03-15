export const formatPoints = (points: number): string => {
    return `${points} points`;
};

export const validateCouponNumber = (coupon: string): boolean => {
    const couponRegex = /^[A-Z0-9]{5,10}$/; // Example regex for coupon validation
    return couponRegex.test(coupon);
};

export const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatDate = (date: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
};