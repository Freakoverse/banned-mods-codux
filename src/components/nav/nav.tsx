import styles from './nav.module.scss';
import cx from 'classnames';
import routeStyles from '../../../app/routes/_index/route.module.scss';

export interface NavProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Nav = ({ className }: NavProps) => {
    return (
        <div className={styles.navMain}>
            <div className={routeStyles.containerMain}>
                <div className={styles.navMainInside}>
                    <div className={styles.navMainInsideSec} />
                    <div className={cx(styles.navMainInsideSec, styles.navMainInsideSecLinks)}>
                        <a href="/" className={styles.navMainInsideSecLinksLink}>
                            Link
                        </a>
                        <a href="/" className={styles.navMainInsideSecLinksLink}>
                            Link
                        </a>
                        <a href="/" className={styles.navMainInsideSecLinksLink}>
                            Link
                        </a>
                        <a href="/" className={styles.navMainInsideSecLinksLink}>
                            Link
                        </a>
                    </div>
                    <div className={styles.navMainInsideSec} />
                </div>
            </div>
        </div>
    );
};
