"use client"
import { ColumnDef } from "@tanstack/react-table"
import { useReviews } from "@/state/use-reviews"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export type Review = {
    input: string,
    language: 'Arabic' | 'Danish' | 'Dutch' | 'English' | 'French' | 'German' | 'Greek' | 'Hindi' | 'Italian' | 'Kannada' | 'Malayalam' | 'Portugeese' | 'Russian' | 'Spanish' | 'Sweedish' | 'Tamil' | 'Turkish'
    iat: Date,
}

export const columns: ColumnDef<Review>[] = [
    {
        accessorKey: "input",
        header: "Statement",
        cell: ({ row }) => (
            <div className="line-clamp-1 ">
                {row.getValue("input") as string}
            </div>
        )
    },
    {
        accessorKey: "language",
        header: "Language",
    },
    {
        accessorKey: "iat",
        header: "Date",
        cell: ({ row }) => {
            const iat = row.getValue("iat") as Date
            return (
                <div>
                    {iat.toLocaleString()}
                </div>
            )
        }
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            //TODO FIXME
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { deleteReview } = useReviews();
            const review = row.original as Review
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="w-8 h-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="w-4 h-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(review.input)}> Copy Review</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => deleteReview(review.iat)}> Delete Review</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    },
]
