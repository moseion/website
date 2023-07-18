import React from 'react';
import styles from './page.module.css';

const Embeddings = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Embeddings</h1>
            <div className={styles.tableContainer}> {/* Add this wrapper */}
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Timestamp</th>
                            <th>Data</th>
                            <th>Title</th>
                            <th>File Size</th>
                            <th>Embeddings Model</th>
                            <th>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>7/13</td>
                            <td>
                                <a href="https://dumps.wikimedia.org/enwiki/20230701/">enWiki</a>
                            </td>
                            <td>Wikipedia</td>
                            <td>10.31 MB</td>
                            <td>sentence-transformers/all-MiniLM-L6-v2</td>
                            <td>
                                <a href="https://storage.fleek-internal.com/3bd9e981-1e71-4573-a2ad-b9e8e876f3ef-bucket/WikiEmbeddings.npy" download> <b>Download</b></a>
                            </td>
                        </tr>
                        <tr>
                            <td>...</td>
                            <td> <a href= "https://commoncrawl.org/the-data/get-started/">CC Data </a> 
                            </td>
                            <td>Common Crawl</td>
                            <td>...</td>
                            <td>...</td>
                            <td>
                                <a href="" download><b>...</b></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Embeddings;
