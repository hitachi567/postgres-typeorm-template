import { dataSource } from './data-source';

main().catch(error => console.error(error));

async function main() {
    await dataSource.initialize();
}
