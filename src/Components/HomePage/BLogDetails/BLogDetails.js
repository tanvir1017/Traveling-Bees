import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import clock from "../../../Img/Icons/clock.png";
import comment from "../../../Img/Icons/comment.png";
import Navbar from "../../Shared/Navbar/Navbar";
import "./BlogDetails.css";

const BLogDetails = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState({});
  useEffect(() => {
    fetch(`https://peaceful-castle-84704.herokuapp.com/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, [id]);
  const {
    title,
    blog_cover,
    posted_time,
    rating,
    writer_about_img,
    writer_about_title,
    sub_desc,
    writer_bio,
    writer_name,
    writer_img,
    releted_img5,
    releted_img4,
    releted_img3,
    releted_img2,
    releted_img1,
    releted_desc2,
    releted_title2,
    releted_desc1,
    releted_title1,
  } = blogs;
  return (
    <div>
      <Navbar />
      <div className="bg">
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-8 col-md-7 col-12 ">
              <div className="blogs_details_wrapper">
                <div className="blog_cover">
                  {blog_cover ? (
                    <img className="img-fluid" src={blog_cover} alt="" />
                  ) : (
                    <img
                      className="img-fluid"
                      src="https://www.bwikotamalang.net/assets/img/blank.jpg"
                      alt=""
                    />
                  )}
                </div>

                <div className="static_text">
                  <h5>PHOTOGRAPHY</h5>
                  <div className="share_icons">
                    <i className="fa fa-share-alt"></i>
                    <i className="ms-3 fa fa-heart"></i>
                  </div>
                </div>

                <div className="blog_details_body">
                  <h2 className="blog_title text-start text-white">{title}</h2>
                  <div className="posted_time_comment text-start ">
                    <span>
                      <img className="img-fluid" src={clock} alt="" />
                      {posted_time}
                    </span>
                    <span className="ms-5">
                      <img className="img-fluid" src={comment} alt="" /> Comment
                    </span>
                  </div>
                  <div className="hr"></div>
                  <div className="blog_desc">
                    <p>{sub_desc}</p>
                  </div>
                  <div className="hr"> </div>
                  <div className="releted_desc">
                    <div className="row">
                      <div className="static_text px-4">
                        <h5>{releted_title1}</h5>
                        <div className="share_icons">
                          <i className="fa fa-save"></i>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12 related_desc1">
                        <p>{releted_desc1}</p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12 ">
                        {releted_img1 ? (
                          <img
                            className="img-fluid"
                            src={releted_img1}
                            alt=""
                          />
                        ) : (
                          <img
                            className="img-fluid"
                            src="https://www.bwikotamalang.net/assets/img/blank.jpg"
                            alt=""
                          />
                        )}
                      </div>
                      <div className="col-12 related_desc1 my-3">
                        <p>{releted_desc1}</p>
                      </div>
                    </div>
                  </div>
                  <div className="hr"> </div>
                  <div className="releted_desc">
                    <div className="row">
                      <div className="static_text px-4">
                        <h5>{releted_title2}</h5>
                        <div className="share_icons">
                          <i className="fa fa-save"></i>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-12 ">
                        <div
                          id="carouselExampleInterval"
                          class="carousel slide"
                          data-bs-ride="carousel"
                        >
                          <div class="carousel-inner">
                            <div
                              class="carousel-item active"
                              data-bs-interval="10000"
                            >
                              {releted_img2 ? (
                                <img
                                  className="img-fluid"
                                  src={releted_img2}
                                  alt=""
                                />
                              ) : (
                                <img
                                  className="img-fluid"
                                  src="https://www.bwikotamalang.net/assets/img/blank.jpg"
                                  alt=""
                                />
                              )}
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                              {releted_img3 ? (
                                <img
                                  className="img-fluid"
                                  src={releted_img3}
                                  alt=""
                                />
                              ) : (
                                <img
                                  className="img-fluid"
                                  src="https://www.bwikotamalang.net/assets/img/blank.jpg"
                                  alt=""
                                />
                              )}
                            </div>
                            <div class="carousel-item">
                              {releted_img4 ? (
                                <img
                                  className="img-fluid"
                                  src={releted_img4}
                                  alt=""
                                />
                              ) : (
                                <img
                                  className="img-fluid"
                                  src="https://www.bwikotamalang.net/assets/img/blank.jpg"
                                  alt=""
                                />
                              )}
                            </div>
                            <div class="carousel-item">
                              {releted_img5 ? (
                                <img
                                  className="img-fluid"
                                  src={releted_img5}
                                  alt=""
                                />
                              ) : (
                                <img
                                  className="img-fluid"
                                  src="https://www.bwikotamalang.net/assets/img/blank.jpg"
                                  alt=""
                                />
                              )}
                            </div>
                          </div>
                          <button
                            class="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleInterval"
                            data-bs-slide="prev"
                          >
                            <span
                              class="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Previous</span>
                          </button>
                          <button
                            class="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleInterval"
                            data-bs-slide="next"
                          >
                            <span
                              class="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>
                      <div className="col-12 related_desc1 mt-5">
                        <p>{releted_desc2}</p>
                      </div>
                      <div className="col-12 related_desc1 my-3">
                        <p>{releted_desc2}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="author_wrapper">
                <div className="author_about_body">
                  <div className="row">
                    <div className="col-lg-3 col-12 author_img">
                      <img src={writer_img} className="img-fluid " alt="" />
                      <div className="author_about">
                        <h6>{writer_name}</h6>
                        <div className="author_post_time ">
                          <span>
                            <img className="img-fluid" src={clock} alt="" />
                            {posted_time}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-9 col-12 writter_bio">
                      <p>{writer_bio}</p>
                      <div className="author_account">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                        <i class="fa fa-youtube" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-12">
              <div className="author_about_wrapper">
                <h5 className="mb-3">About Me</h5>
                <img src={writer_about_img} className="img-fluid" alt="" />
                <div className="author_about_body">
                  <h5>I'm {writer_name}, I blog about travel.</h5>
                  <p>{writer_about_title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BLogDetails;
