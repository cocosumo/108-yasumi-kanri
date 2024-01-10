import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {type ReactNode} from 'react';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export default function AppContainer({
	children,
}: {
	readonly children: ReactNode;
}) {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen={false}/>
		</QueryClientProvider>
	);
}
