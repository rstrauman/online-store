import { Link } from 'react-router-dom';

function Account() {
    return (
        <section className="account-page">
            <div className="container">
                <div className="account-container">
                    <div className="account-hero">
                        <p className="cart-category">Veltra Account</p>
                        <h1>Welcome Back</h1>
                        <p>
                            Manage your profile, track your orders, and keep an eye on your Veltra shopping activity.
                        </p>
                    </div>

                    <div className="account-layout">
                        <aside className="account-profile-card">
                            <div className="account-avatar">
                                HC
                            </div>
                            <h2>Handsome Customer</h2>
                            <p className="account-email">handsomecustomer999@mail.com</p>
                            <div className="account-status">
                                <span>Member</span>
                                <span>Active</span>
                            </div>
                            <Link to="/" className="cart-link">
                                Back to Home
                            </Link>
                        </aside>

                        <div className="account-main">
                            <div className="account-stats">
                                <div className="account-stat-card">
                                    <p>Orders</p>
                                    <h3>3</h3>
                                </div>
                                <div className="account-stat-card">
                                    <p>Cart Items</p>
                                    <h3>2</h3>
                                </div>
                                <div className="account-stat-card">
                                    <p>Saved</p>
                                    <h3>$42</h3>
                                </div>
                            </div>

                            <div className="account-panel">
                                <div className="account-panel-heading">
                                    <h2>Account Tools</h2>
                                    <p>Quick actions for your shopping profile.</p>
                                </div>
                                <div className="account-actions">
                                    <div className="account-action-card">
                                        <h3>Order History</h3>
                                        <p>Review previous orders and checkout activity.</p>
                                        <button>View Orders</button>
                                    </div>
                                    <div className="account-action-card">
                                        <h3>Wishlist</h3>
                                        <p>Save products here for later shopping sessions.</p>
                                        <button>Open Wishlist</button>
                                    </div>
                                    <div className="account-action-card">
                                        <h3>Settings</h3>
                                        <p>Update account preferences and display options.</p>
                                        <button>Edit Settings</button>
                                    </div>
                                </div>
                            </div>

                            <div className="account-panel">
                                <div className="account-panel-heading">
                                    <h2>Recent Activity</h2>
                                    <p>Your latest store activity appears here.</p>
                                </div>
                                <div className="activity-list">
                                    <div className="activity-item">
                                        <span></span>
                                        <p>Added a backpack to cart</p>
                                    </div>
                                    <div className="activity-item">
                                        <span></span>
                                        <p>Viewed electronics category</p>
                                    </div>
                                    <div className="activity-item">
                                        <span></span>
                                        <p>Checked out product details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Account;