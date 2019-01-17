export interface TrendingDestinationListProps {
    destinationType: "cities" | "countries";
    destinations: ITrendingDestination[];
}

export interface ITrendingDestination {
    title: string;
    imageUrl: string;
}