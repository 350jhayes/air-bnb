import { Reservation, User, Listings } from '@prisma/client';

export type SafeListings = Omit<
    Listings,
    "createdAt"
> & {
    createdAt: string;
};

export type SafeReservation = Omit<Reservation,
    "createdAt" | "startDate" | "endDate" | "Listing"
> & {
    createdAt: string;
    startDate: string;
    endDate: string;
    listing: SafeListings;
};

export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
}
