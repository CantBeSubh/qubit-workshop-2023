'use client'
import { Review } from '@/components/reviews/columns';
import { create } from 'zustand';
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from 'react-hot-toast';


interface ReviewsStore {
    reviews: Review[];
    addReview: (review: Review) => void;
    deleteReview: (iat: Date) => void;
}

export const useReviews = create(
    // presist the store in local storage
    persist<ReviewsStore>(
        (set) => ({
            reviews: [],
            addReview: (review) => {
                set((state) => ({
                    reviews: [...state.reviews, review],
                }))
                toast.success("Review added successfully");
            },
            deleteReview: (iat) => {
                set((state) => ({
                    reviews: state.reviews.filter((review) => review.iat !== iat),
                }))
                toast.success("Review deleted successfully");
            },
        }), {
        name: "reviews-storage",
        storage: createJSONStorage(() => localStorage),
    }));